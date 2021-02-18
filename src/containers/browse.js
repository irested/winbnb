/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Card } from '../components';

export function BrowseContainer() {
  return (
    <Card.Group>
      <Card>
        <Card.GroupTitle>Stays in finland</Card.GroupTitle>
        <Card.Entities>
          <Card.Item>
            <Card.Picture src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" />
            <Card.Meta>
              <Card.SuperHost>SUPER HOST</Card.SuperHost>
              <Card.Type>Entire apartement . 2beds</Card.Type>
              <Card.Rating>4.40</Card.Rating>
            </Card.Meta>
            <Card.Title>Stylist apartment in center of the city</Card.Title>
          </Card.Item>
          <Card.Item>
            <Card.Picture src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" />
            <Card.Meta>
              <Card.SuperHost>SUPER HOST</Card.SuperHost>
              <Card.Type>Entire apartement . 2beds</Card.Type>
              <Card.Rating>4.40</Card.Rating>
            </Card.Meta>
          </Card.Item>
          <Card.Item>
            <Card.Picture src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" />
            <Card.Meta>
              <Card.SuperHost>SUPER HOST</Card.SuperHost>
              <Card.Type>Entire apartement . 2beds</Card.Type>
              <Card.Rating>4.40</Card.Rating>
            </Card.Meta>
          </Card.Item>
          <Card.Item>
            <Card.Picture src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" />
            <Card.Meta>
              <Card.SuperHost>SUPER HOST</Card.SuperHost>
              <Card.Type>Entire apartement . 2beds</Card.Type>
              <Card.Rating>4.40</Card.Rating>
            </Card.Meta>
          </Card.Item>
        </Card.Entities>
      </Card>
    </Card.Group>
  );
}
