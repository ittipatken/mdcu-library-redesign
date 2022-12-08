import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React from 'react';
import Link from 'next/link';

interface cardProps {
    name: string
    link: string
}

export default function LinkCard(props: cardProps) {
    return (
        <Link href={props.link} target="_blank" rel="noreferrer">
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.link}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
    )
}