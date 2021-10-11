import React from "react";
import { Card } from "react-bootstrap";
import "./NewsCard.css";
const NewsCard = (props) => {
  return (
    <>
      {props.articles
        ? props.articles.map((item, index) => {
            return (
              <div className="grid-container">
                <div className="card">
                  <Card className="bg-dark text-white" key={index}>
                    <Card.Img src={item.urlToImage} alt="Card image" />
                    <Card.ImgOverlay>
                      <div className="detail">
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text>{item.publishedAt}</Card.Text>
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </div>
              </div>
            );
          })
        : "loading"}
      ;
    </>
  );
};
export default NewsCard;
