import { sidebarMenuItems } from '@layout/molecules/MenuItems';
import { Card, Overlay, Text, Title, SimpleGrid, Divider, rem, Button } from '@mantine/core';
import classes from '@styles/ImageActionBanner.module.css';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

function Banner() {
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Title order={1} fw={700} className={classes.title}>
          Welcome to Hobby finder
        </Title>
        <Text className={classes.description}>
          Find friends to share your hobbies with, discover new places in your area and plan your experience.
        </Text>
      </div>
    </Card>

  );
}

function MenuCards() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing="lg" mt={30}>
      {sidebarMenuItems.map((link, index) => (
        <Card radius="md" key={link.label} shadow="sm" padding="lg" withBorder className='flex justify-between' >
          <div>
            <div className='flex gap-2 items-center'>
              <link.icon size={30} stroke={1.5} >
              </link.icon>
              <Title order={1} fw={700} >
                {link.label}
              </Title>
            </div>
            <Divider my="sm" />
            <Text>
              {link.description}
            </Text>
          </div>
          <Link href={link.href} className='w-full'>
            <Button variant="light"
              fullWidth mt="md"
              radius="md">
              Go to {link.label}&nbsp;<IconArrowRight size={18} />
            </Button>
          </Link>
        </Card>
      ))}
    </SimpleGrid>)
}

export default function Home() {
  return (
    <>
      <Banner />
      <MenuCards />
    </>
  );
}
