import React from "react";
import CardProduct from "./components/CardProduct";
import { Row, Col } from "antd";
function App() {
  const data = [
    {
      id: 1,
      title: "The gaslight district",
      Decompression: "April 18th, 2025",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_0ryl-jZ7k7aQ32gWEXWzKw_mxUyi9xh2w&s",
    },
    {
      id: 2,
      title: "The amazing digital circus",
      Decompression: "Oct 14th, 2023",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIRXecXXj_wRfM9IYUiQifiIQRHz33mwL5g&s",
    },
    {
      id: 3,
      title: "MURDER DRONE",
      Decompression: "October 29th, 2021",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67jrvQ3YSrvOPDLcDV_OZwxfOFeU5cY5u4g&s",
    },
    {
      id: 4,
      title: "Tensei shitara Dainana Ouji Datta node",
      Decompression: "October 3th1, 2019",
      url: "https://cdn.myanimelist.net/images/anime/1580/141243.jpg",
    },
    {
      id: 5,
      title: "The Pink City",
      Decompression: "June 9th, 2020",
      url: "https://i.ytimg.com/vi/x2W01VOKiw8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBn6k1zKeu4TeHmatIqBEFlkgOByQ",
    },
    {
      id: 6,
      title: "Heppy three friend",
      Decompression: "April 2th, 2009",
      url: "https://m.media-amazon.com/images/M/MV5BMDMxZmMxNGItOTdkYS00NmY4LTg2MDQtYmVhNmYxNDkwMjFjXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 7,
      title: "Helluva Boss",
      Decompression: "Nov 1th,2020",
      url: "https://m.media-amazon.com/images/M/MV5BNDUwOGIyNzItYzY4NC00YzE0LTkyYWMtMjcyOTQ4ODM1ZjNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 8,
      title: "hazbin hotel",
      Decompression: "January 19, 2024",
      url: "https://newdailycompass.com/storage/imgs/hazbin-large.jpg",
    },
    {
      id: 9,
      title: "Made in Abyss",
      Decompression: "July 7, 2017",
      url: "https://storage.naiin.com/system/application/bookstore/resource/product/202408/621235/1000274788_front_XXL.jpg?imgname=Made-in-Abyss-%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%AB%E0%B8%A7%E0%B8%99%E0%B8%A3%E0%B8%81-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-1-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87(Mg)",
    },
    {
      id: 10,
      title: "Ousama Ranking",
      Decompression: "October 15, 2021",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24CHMK93qLVfkx0oFyh5ieDtnpl2P4NulsQ&s",
    },
  ];
  return (
    <Row>
      {data.map((item) => (
        <Col xs={24} sm={12} md={8} lg={6}>
          <CardProduct data={item} />
        </Col>
      ))}
    </Row>
  );
}

export default App;
