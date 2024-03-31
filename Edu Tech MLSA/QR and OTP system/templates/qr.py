from flask import Flask, render_template, request
import qrcode
import base64
import io

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_qr', methods=['POST'])
def generate_qr():
    data = request.form['data']

    # Generate QR code
    qr = qrcode.make(data)

    # Save QR code image to BytesIO buffer
    buffer = io.BytesIO()
    qr.save(buffer, format='PNG')

    # Convert QR code image to base64 string
    qr_image = base64.b64encode(buffer.getvalue()).decode()

    return render_template('index.html', qr_image=qr_image)

if __name__ == '__main__':
    app.run(debug=True)
