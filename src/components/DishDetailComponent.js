import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardBody,CardTitle,CardText} from 'reactstrap';
export default class DishDetail extends React.Component {


    constructor(props) {
        super(props);

    }

    
    render() {
        if (this.props.dish != null) {

            let list = this.props.dish.comments.map((comments)=>{
    
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
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
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
}
