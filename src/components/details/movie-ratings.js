import styled from 'styled-components';
import { Divider, Grid } from '@mui/material';

export const MovieRatings = (props) =>{
    const movie = props.movie;

    return(
        <RatingContainer>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Rating>
                    <Value>{movie.Ratings[0]?.Value ?? "N/A"}</Value>
                    <Source>{movie.Ratings[0]?.Source ?? "N/A"}</Source>   
                </Rating>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem style={{marginRight:"-1px"}} />
            <Grid item xs={4}><Rating>
                <Value>{movie.Ratings[1]?.Value ?? "N/A"}</Value>
                <Source>{movie.Ratings[1]?.Source ?? "N/A"}</Source>    
            </Rating>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem style={{marginRight:"-10px" }} />
            <Grid item xs={4}><Rating>
                <Value>{movie.Ratings[2]?.Value ?? "N/A"}</Value>
                <Source>{movie.Ratings[2]?.Source ?? "N/A"}</Source>   
            </Rating> </Grid>
        </Grid>
    </RatingContainer>
    )
}

const RatingContainer = styled.div`
    margin-top: 30px;
`;

const Rating = styled.div`
`;

const Value = styled.div`
    margin-bottom:10px`;

const Source = styled.div``;
