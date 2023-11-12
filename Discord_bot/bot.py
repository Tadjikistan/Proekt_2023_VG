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

        db.server_messages_log.insert_one({"id": message.author.id,"balance": responses.balance}) #Добавляем в коллекцию server_message_log, одну запись

    except Exception as e:
        print(e)
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