

import azure.functions as func
import pickle


def main(req: func.HttpRequest) -> func.HttpResponse:
    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        var=name
        load_model = pickle.load(open('final_model.sav', 'rb'))
        prediction = load_model.predict([var])
        prob = load_model.predict_proba([var])

        
        

        #return func.HttpResponse(f"{prediction[0]} with {prob[0][1]}")
        return func.HttpResponse("{} with {:.2f}% Probability".format(prediction[0],prob[0][1]*100))
        
    else:
        return func.HttpResponse(
             "Please paste news in the above box.",
             status_code=200
        )
