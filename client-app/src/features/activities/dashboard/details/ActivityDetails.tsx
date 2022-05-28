import React from "react";
import { Card, Image,  Button } from "semantic-ui-react";
import LoadingComponent from "../../../../app/layout/LoadingComponents";
import { Activity } from "../../../../app/models/activity";
import { useStore } from "../../../../app/stores/store";

export default function ActivityDetails(){
    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

    if (!activity) return <LoadingComponent />;
    
    return(
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
            <Card.Content>
                <Card.Header>
                    {activity.title}
                </Card.Header>
            </Card.Content>
            <Card.Meta>
                <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>
                Matthew is a ....
            </Card.Description>
            <Card.Content>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit'/>
                    <Button onClick={cancelSelectedActivity} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}