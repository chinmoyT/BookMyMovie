import { Button, Card, CardActions, CardContent, Typography} from '@mui/material';
import React from 'react';
import two from '../../assets/two.jpeg'
import three from '../../assets/three.jpg'
import four from '../../assets/five.jpeg'
import five from '../../assets/five.jpeg'
const MovieItem = ({title, releaseDate, posterUrl, id}) => {
  // const projectsData = [
  //   {
  //     id: 1,
  //     image: two,
  //     title: 'Adipursh',
  //   },
  //   {
  //     id: 2,
  //     image: three,
  //     title: 'Animal',
  //   },
  //   {
  //     id: 3,
  //     image: four,
  //     title: 'Spy',
  //   },
  //   {
  //     id: 4,
  //     image: five,
  //     title: 'Flash',
  //   },
  // ];

  return (
    <>
      {/* {projectsData.map(({ id, image, title,releaseDate }) => ( */}
        <Card
          key={id}
          sx={{
            margin: 2,
            width: 250,
            height: 380,
            borderRadius: 5,
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <img height={'60%'} width={'100%'} src={posterUrl} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(releaseDate).toDateString()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ margin: 'auto' }} size="small">BOOK NOW</Button>
          </CardActions>
        </Card>
      {/*  ))} */}
    </>
  );
};

export default MovieItem;
