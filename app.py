import os

import openai
from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")
openai.api_key = "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"


@app.route("/", methods=("GET", "POST"))
def index():
    if request.method == "POST":
        symptoms = request.form["symptoms"]
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=generate_prompt(symptoms),
            temperature=0.4,
            max_tokens=500
        )
        print(response)
        return redirect(url_for("index", result=response.choices[0].text))

    result = request.args.get("result")
    return render_template("index.html", result=result)


def generate_prompt(symptoms):
    return """I have {} what is the most probable disease I have
give me the probable diseases in bullet points and give me web links on more information on these diseases""".format(
        symptoms.capitalize()
    )
if __name__ == "__main__":
    app.run(debug=True)