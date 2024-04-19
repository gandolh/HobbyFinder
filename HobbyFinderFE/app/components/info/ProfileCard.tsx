import { UserProfile } from '@auth0/nextjs-auth0/client';
import { AvatarPic } from '@layout/molecules/PowerButton';
import { Avatar, Text, Button, Paper } from '@mantine/core';

interface ProfileCardProps {
    user : UserProfile;
}

const ProfileCard = ({user} : ProfileCardProps) => {
    return (
        <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
          <AvatarPic src={user.picture} radius={120} mx="auto"/>
            <Text ta="center" fz="lg" fw={500} mt="md">
                {user.name}
            </Text>
            <Text ta="center" c="dimmed" fz="sm">
                {user.email} • {new Date(user.updated_at ?? "").toLocaleDateString()}
            </Text>

        </Paper>

    );
}

export default ProfileCard;