

def webhooksecret():
    webhook_url = 'https://webhook.site/d74c7472-3858-4e2e-b889-09ab89799979'
    # signature stripe
    # https://stripe.com/docs/webhooks/signatures?locale=en-GB
    event = "SUCCEED_LINK_FOR_UPLOAD"
    secret_key = b"931203IJR120"

    # format json to str for encoding
    encoded_payload = json.dumps({'status_txt': 'SUCCEED_LINK_FOR_UPLOAD', 'userid': 'mariobobon@gmail.com',
                                  'requestid': 'mario@gmail.com', 'link': 'amazon.aws.mocklink.com',
                                  'flag': 'flagfile.flg'})

    # Compute the HMAC of the message using the SHA-256 hash function
    hmac_value = hmac.new(secret_key, (encoded_payload).encode(), hashlib.sha256).hexdigest()

    # creating the custom authorization header X-Webook_Header
    print(hmac_value)
    r = requests.put(webhook_url, data=encoded_payload,
                     headers={'X-Webhook_Header': f"{hmac_value}", 'Content-Type': 'application/json'})

    # https://youtu.be/X-_25tzo8Cw
    # https://webhook.site/#!/d74c7472-3858-4e2e-b889-09ab89799979


webhooksecret()
