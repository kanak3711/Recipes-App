import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';
function DishDetail(props){


        if (props.dish != null) {

            let list =props.dish.comments.map((comments)=>{
    
                return(
                    <li key={comments.id} >
                        <div>
                            <p>{comments.comment}</p>
                            <p>--{comments.author},
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                        </div>
                    </li>
    
                )
            })
    
            return(
                <div className="container" >
                    <div className="row">
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={props.dish.image} alt={props.dish.name} />
                    <CardBody>
                      <CardTitle>{props.dish.name}</CardTitle>
                      <CardText>{props.dish.description}</CardText>
                    </CardBody>
                    
                </Card>
                </div>
                    <div className="col-12 col-md-5 m-1" class="text-left">
                        
                        <h4 class="font-weight-bold">Comments</h4>
                        <ul className="list-unstyled" class="font-weight-normal">
                            {list}
                        </ul>
                        
                    </div>
                    </div>
                    </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
export default DishDetail;