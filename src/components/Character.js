import React, { useEffect } from 'react';
import { useHttp } from '../hooks/http';
import Summary from './Summary';

const Character = props => {
  const [isLoading, fetchedData] = useHttp('https://swapi.dev/api/people/' + props.selectedChar, [props.selectedChar]);

  let loadedCharacter = null;
  if (fetchedData) {
    loadedCharacter = {
      id: props.selectedChar,
      name: fetchedData.name,
      height: fetchedData.height,
      colors: {
        hair: fetchedData.hair_color,
        skin: fetchedData.skin_color
      },
      gender: fetchedData.gender,
      movieCount: fetchedData.films.length
    };
  }

  console.log('Rendering...');

  // componentDidUnmount (IMPORTANT: 2nd arg as [], and the return function is when unmounts! 
  // Also note, this will run when the component mounts, only the return part is not on the start)
  useEffect(() => {
    return() => {
      // cleanup, runs before the next useEffect call and if we have 2nd arg in useEffect, this will also runs when the component is being removed. 
      // We can use it as componentWillUnmonth
      console.log('Component did unmount');
    }
  }, [])

  let content = <p>Loading Character...</p>;

  if (!isLoading && loadedCharacter) {
    content = (
      <>
        <Summary
          name={loadedCharacter.name}
          gender={loadedCharacter.gender}
          height={loadedCharacter.height}
          hairColor={loadedCharacter.colors.hair}
          skinColor={loadedCharacter.colors.skin}
          movieCount={loadedCharacter.movieCount}
      />
      </>
    );
  } else if (!isLoading && !loadedCharacter) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;
  
}

export default React.memo(Character);
// memo basically memoizes the component, so it will only re-render if there is a change in props or state
