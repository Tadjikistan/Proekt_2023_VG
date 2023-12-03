import discord
import responses
import pymongo

client = pymongo.MongoClient("mongodb+srv://discordroll:check@discordroll.ej9jzg7.mongodb.net/?retryWrites=true&w=majority")
db = client.users

print(db)

async def send_message(message, user_message, is_private):
    try:
        response = responses.get_response(user_message)
        await message.author.send(response) if is_private else await message.channel.send(response)
        print(db.server_messages_log.find_one({'id': message.author.id}))
        if db.server_messages_log.find_one({'id': message.author.id}) == None: #Проверка на пользователя в базе данных
            print(f'New user {message.author} Added')
            db.server_messages_log.insert_one({"id": message.author.id,"balance": responses.balance})  # Добавляем в коллекцию server_message_log, одну запись

        else:
            print(f'Balance of user {message.author} was updated')
            wallet = db.server_messages_log.find_one({'id': message.author.id}).get('balance')
            print(type(wallet), 'Счёт')
            db.server_messages_log.update_one({"id": message.author.id}, {"$set": {"balance":  cashing(wallet, message)}}) #Обновление баланса пользователя
    except Exception as e:
        print(e)


def cashing(bal, message: str):
    print('Im here')
    bal += 5
    return bal
def run_discord_bot():
    TOKEN = ''
    intents = discord.Intents.default()
    intents.message_content = True
    client = discord.Client(intents=intents)

    @client.event
    async def on_ready():
        print(f'{client.user} is now running!')

    @client.event
    async def on_message(message):
        if message.author == client.user:
            return

        username = str(message.author)
        user_message = str(message.content)
        channel = str(message.channel)

        print(f'{username} said: "{user_message}" ({channel})')

        if user_message[0] == '?':
            user_message = user_message[1:]
            await send_message(message, user_message, is_private=True)
        else:
            await send_message(message, user_message, is_private=False)

    client.run(TOKEN)