import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Image,  Button } from "semantic-ui-react";
import LoadingComponent from "../../../../app/layout/LoadingComponents";
import { useStore } from "../../../../app/stores/store";

export default observer(function ActivityDetails(){
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string }>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent />;
    
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
                    <Button as={Link} to={`/manage/${activity.id}`}basic color='blue' content='Edit'/>
                    <Button as={Link} to='/activities' basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})
