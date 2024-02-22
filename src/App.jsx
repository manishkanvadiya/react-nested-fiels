import { useState } from 'react';
import './App.css';

const file = {
  children: [
    {
      name: 'public',
      children: [
        {
          name: 'index.html',
        },
      ],
    },
    {
      name: 'src',
      children: [
        {
          name: 'assets',
          children: [
            {
              name: 'react.svg',
            },
          ],
        },
        {
          name: 'main.jsx',
        },
        {
          name: 'App.jsx',
        },
      ],
    },
    {
      name: 'package.json',
    },
    {
      name: 'README.md',
    },
  ],
};

function Entry({ entry, depth }) {
  const [expand, setEexpand] = useState(false);
  return (
    <>
      {entry.children ? (
        <div onClick={() => setEexpand(!expand)}>
          {!expand ? '+ ' : '- '}
          {entry.name}
        </div>
      ) : (
        <div>{entry.name}</div>
      )}

      {expand && (
        <div style={{ paddingLeft: '15px' }}>
          {entry.children?.map((item) => (
            <Entry entry={item} />
          ))}
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <>
      {file.children.map((item) => (
        <Entry entry={item} />
      ))}
    </>
  );
}

export default App;
