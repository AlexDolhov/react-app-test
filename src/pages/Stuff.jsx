import Alert from "../components/Alert/Alert";
import Counter from "../components/Counter/Counter";
import Toggle from "../components/Toggle/Toggle";
import Panel from "../components/Panel/Panel";
import Profile from "../components/Profile/Profile";
import Form from "../components/Form/Form";
import News from "../components/News/News";
import CounterOnHooks from "../components/CounterOnHooks/HooksPractice";
import UserMenu from "../components/UserMenu/UserMenu";
import Player from "../components/Player/Player";

const Stuff = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
      <Counter></Counter>
      <CounterOnHooks />
      <Toggle>
        <h2>Open</h2>
      </Toggle>
      <Panel title="User profile">
        <Profile name="Mango" email="mango@mail.com" />
      </Panel>
      <Form onSubmit={(values) => console.log(values)} />
      <UserMenu />
      <Player source="<http://media.w3.org/2010/05/sintel/trailer.mp4>" />
      <News />
    </>
  );
};

export default Stuff;