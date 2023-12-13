import discord
import responses
import pymongo
import datetime

client = pymongo.MongoClient("mongodb+srv://discordroll:check@discordroll.ej9jzg7.mongodb.net/?retryWrites=true&w=majority")
db = client.users

print(db)

async def send_message(message, user_message, is_private):
    try:
        time =  datetime.datetime.utcnow()
        print(type(time))
        #response = responses.get_response(user_message)
        #await message.author.send(response) if is_private else await message.channel.send(response)
        name = str(message.author)
        #print(db.users.find_one({'name': name}))
        if db.users.find_one({'name': name}) == None: #Проверка на пользователя в базе данных
            print(f'New user {name} Added')
            db.users.insert_one({"name": name,"balance": responses.balance, "CreatedAt": time})  # Добавляем в коллекцию server_message_log, одну запись

        else:
            print(f'Balance of user {name} was updated')
            wallet = db.users.find_one({'name': name}).get('balance')
            print(type(wallet), 'Счёт')
            db.users.update_one({"name": name}, {"$set": {"balance":  cashing(wallet, message), "updatedAt": time}}) #Обновление баланса пользователя
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