from flask import Flask, redirect
from instabot import Bot
import os

app = Flask(__name__)

# Replace these with your Instagram credentials
INSTAGRAM_USERNAME = 'your_instagram_username'
INSTAGRAM_PASSWORD = 'your_instagram_password'

bot = Bot()

@app.route('/login_instagram')
def login_instagram():
    bot.login(username=INSTAGRAM_USERNAME, password=INSTAGRAM_PASSWORD)
    # Send a message to your Instagram account
    bot.send_message("Follow me on Instagram!", ['your_instagram_id'])
    # Redirect to your Instagram profile
    return redirect("https://instagram.com/yourprofile")

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
