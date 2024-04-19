import { Button, Card, Divider, SimpleGrid, Title } from "@mantine/core";
import Link from "next/link";
import { Lobbies } from "@/app/data/Lobbies";

const TeamHobbyLobbies = () => {
    return (
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing="lg">
            {Lobbies.map(el => (
                <Card shadow="xs" padding="lg" withBorder className="flex justify-between">
                    <div>
                        <div className="flex gap-2 items-center font-bold">
                            <Title order={2}>{el.name}</Title>
                        </div>
                        <Divider my="sm" />
                        <div>
                            <small className="font-bold">{el.startDateTime.toLocaleString()}
                                &nbsp;-&nbsp;
                                {el.endDateTime.toLocaleString()}</small>
                        </div>
                        <div>
                            <small> <span className="font-bold">Users:</span> {el.joinedUsers.map((user) => user.email).slice(0, 3).join(", ")}</small>
                        </div>
                    </div>
                    <Link href={`/team/lobby/${el.id}`} className="mt-2">
                        <Button fullWidth>View</Button>
                    </Link>

                </Card>))}
        </SimpleGrid>
    );
}

export default TeamHobbyLobbies;