import { Button,Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

export default function ServerError() {
    const {state} = useLocation();
    const navigate = useNavigate();
    return (
        <Container component={Paper}>
            {state?.error ? (
                <>
                    <Typography gutterBottom variant="h3" color='secondary'>
                            {state.error.title}
                    </Typography>
                    <Divider />
                    <Typography variant="body1">{state.error.detail || 'Internal server error'}</Typography>
                </>
            ) : (
                <Typography gutterBottom variant='h5'>Server error</Typography>
            )}
            <Button onClick={() => navigate('/catalog')}>Go back to the store</Button>
        </Container>
    )
}

