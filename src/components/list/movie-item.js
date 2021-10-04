import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export const MovieItem = (props) => {
  const { movie } = props;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Card sx={{ width: 128, height: 128, boxShadow: 0 }}>
            <Img alt="complex" src={movie.Poster} />
          </Card>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
              <Typography gutterBottom variant="subtitle1" component="div">
                {movie.Title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.Year}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

