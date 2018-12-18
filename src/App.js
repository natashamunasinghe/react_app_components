import React from "react";
import Comment from "./Comment";
import faker from "faker";
import Card from "./Card";

const App = () => {    
    return (
        <div className="comments">,
        <Card>
            <Comment 
                name="Mary Smith" 
                date="11/12" 
                text="I think you are really cool!" 
                avatar={faker.image.avatar()}
            />
        </Card>
        <Card>
            <Comment 
                name="Jude Henry"
                date="12/12" 
                text="really cool!" 
                avatar={faker.image.avatar()}
            />
        </Card>

        </div>
    );
}

export default App;