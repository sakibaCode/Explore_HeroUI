import { Card, Description } from "@heroui/react";

const TasksCard = ({ task }) => {

    const { title, description } = task
    return (
        <div className="flex felx-col gap-4 border border-gray-400 rounded-2xl ">
            <Card className="w-[320px]" variant="transparent">
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    <Card.Description>{description}</Card.Description>
                </Card.Header>
                
            </Card>
            
        </div>
    );
};

export default TasksCard;