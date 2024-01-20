import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../features/ui/Heading";
import Row from '../features/ui/Row'
function Settings() {
  return <Row>
<Heading as="h1">Update hotel settings</Heading>;
<UpdateSettingsForm/>
    </Row>
}

export default Settings;
