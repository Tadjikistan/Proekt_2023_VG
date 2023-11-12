import random
import pymongo
client = pymongo.MongoClient("mongodb+srv://discordroll:check@discordroll.ej9jzg7.mongodb.net/?retryWrites=true&w=majority")
db = client.users

print(db)
balance = 300
def get_response(message: str) -> str:
    p_message = message.lower()

    if p_message == 'hello':
        return 'Hey there!'

    if message == 'roll':
        return str(random.randint(1, 6))

    if p_message == '!help':
        return '`This is a help message that you can modify`'
    if len(message) != 0:
        count_of_message(message)
        return '`We added 10 points`'


    return 'I didn\'t understand what you wrote. Try typing "!help".'

def count_of_message(message):
    the_message = len(message.lower())
    print(the_message)

