import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

import type { Property } from '../types/property';

type PropertyPostsProps = {
  properties: Property[];
  onSelect: (property: Property) => void;
};

export default function PropertyPosts({
  properties,
  onSelect,
}: PropertyPostsProps) {
  return (
    <Grid container spacing={3}>
      {properties.map((property) => (
        <Grid key={property.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card component="article" sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="220"
              image={property.image}
              alt={property.title}
            />

            <CardContent>
              <Typography variant="h6" component="h2">
                {property.title}
              </Typography>

              <Typography color="text.secondary">
                {property.address}
              </Typography>

              <Typography sx={{ mt: 1 }}>
                {property.area} м² · {property.rooms} комнаты
              </Typography>

              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                {property.price}
              </Typography>

              <Button onClick={() => onSelect(property)}>
                Подробнее
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
