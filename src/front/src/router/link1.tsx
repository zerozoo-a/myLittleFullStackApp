import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
const Link1 = () => {
  const [serverData, setServerData] = useState();
  const [userName, setUserName] = useState<string>();
  useEffect((): void => {
    async function getData(): Promise<void> {
      const response: Response = await fetch('http://localhost:8000/user');
      const data = await response.json();
      setServerData(data.helloReact);
    }
    getData();
  }, []);

  async function submitHandler(e: any): Promise<void> {
    e.preventDefault();
    const user = {
      comment: userName,
    };
    const response: Response = await fetch('http://localhost:8000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    }).catch((error) => {
      throw error;
    });
  }
  function onChangeHandler(event: ChangeEvent<HTMLInputElement>): void {
    setUserName(event.target.value.toString());
  }
  return (
    <div>
      this is Link1 page
      <div>{serverData}</div>
      <div>
        <form onSubmit={(e: FormEvent): Promise<void> => submitHandler(e)}>
          <p>{userName}</p>
          <input
            name='name'
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              onChangeHandler(e)
            }
          />
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Link1;
