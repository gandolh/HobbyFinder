import { Button, Card, Divider, SimpleGrid, Title } from "@mantine/core";
import Link from "next/link";
import { teamSportsData } from "@/app/data/TeamSportsData";


  

const TeamPage = () => {
    return (<>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing="lg">
            {teamSportsData.map(el => (
                <Card shadow="xs" padding="lg" withBorder className="flex justify-between">
                    <div>
                    <div className="flex gap-2 items-center font-bold">
                        <el.icon size={30} stroke={1.5} />
                        <Title order={2}>{el.title}</Title>
                    </div>
                    <Divider my="sm" />
                    <p>Active Lobbies: <span className="font-bold"> {el.activeLobbies}</span></p>
                    <p>Completed Lobbies: <span className="font-bold"> {el.completedLobbies}</span></p>
                    <p>Members: <span className="font-bold"> {el.members}</span></p>
                    </div>  
                    <Link href={`/team/${el.id}`} className="mt-2">
                        <Button fullWidth>View</Button>
                    </Link>

                </Card>))}
        </SimpleGrid>

    </>);
}

export default TeamPage;