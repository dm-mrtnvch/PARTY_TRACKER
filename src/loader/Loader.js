import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alighnItems={'center'}
                  justify={'center'}
            >
                <Grid
                    container
                    alignItems={'center'}
                    direction={'column'}
                >
                    <div className="lds-default">

                        loading
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader