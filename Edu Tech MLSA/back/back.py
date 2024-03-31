from Flask import Flask
import random

app = Flask(__name__)

def generate_otp():
    return ''.join(random.choices('0123456789', k=6))

@app.route('/generate_otp')
def get_otp():
    return generate_otp()

if __name__ == '__main__':
    app.run(debug=True)
