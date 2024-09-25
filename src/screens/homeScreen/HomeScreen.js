import React, { useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "./../../components/categoriesBar/CategoriesBar";
import Video from "./../../components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from './../../redux/actions/videos.action';

const HomeScreen = () => {


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPopularVideos())
  },[dispatch])



  const {videos} = useSelector(state=>state.homeVideos)



  return (
    <Container>

      <CategoriesBar />

      <Row>
        {/* Creating the video component of the home screen inside the row 
              for that using a dummy array of 20 elements*/}

        {videos.map((video) => (
          // lg={3} md={4} means the cl will take 3 grids for the large screen and 4 grids for the medium screen
          <Col lg={3} md={4}>
            <Video video={video} key={video.id} />
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default HomeScreen;
