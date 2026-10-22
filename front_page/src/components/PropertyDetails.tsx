import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';

import type { Property } from '../types/property';

type PropertyDetailsProps = {
  property: Property;
  onBack: () => void;
};

export default function PropertyDetails({
  property,
  onBack,
}: PropertyDetailsProps) {
  return (
    <Card component="article">
      <CardMedia
        component="img"
        height="400"
        image={property.image}
        alt={property.title}
      />

      <CardContent>
        <Stack spacing={2}>
          <Button onClick={onBack} sx={{ alignSelf: 'flex-start' }}>
            ← К списку объектов
          </Button>

          <Typography variant="h4" component="h1">
            {property.title}
          </Typography>

          <Typography color="text.secondary">
            {property.address}
          </Typography>

          <Typography>
            {property.area} м² · {property.rooms} комнаты
          </Typography>

          <Typography variant="h5" color="primary">
            {property.price}
          </Typography>

          <Typography>{property.description}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
