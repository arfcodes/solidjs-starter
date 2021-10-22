/**
 * pages/Homepage/index.js
 */
import { createSignal, onMount } from 'solid-js';

import { getUsers } from '@services/http/test';

const Homepage = () => {
  const [users, setUsers] = createSignal([]);

  onMount(() => {
    getUsers().then((result) => {
      if (result.data.total > 0) {
        setUsers(result.data.data);
      }
    });
  });

  return (
    <div className="homepage">
      <h1 className="mb-8">Users</h1>

      <For each={users()} fallback={<p>Loading...</p>}>
        {(user) => {
          const userName = `${user.first_name} ${user.last_name}`;
          return (
            <figure>
              <img src={user.avatar} alt={userName} />
              <figcaption>{userName}</figcaption>
            </figure>
          );
        }}
      </For>
    </div>
  );
};

export default Homepage;
