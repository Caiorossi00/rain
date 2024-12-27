import React, { useState } from "react";
import UmbrellaContainer from "./UmbrellaContainer";

function AppContainer() {
  const [umbrellas, setUmbrellas] = useState([]);

  const addUmbrella = (parentId = null) => {
    setUmbrellas([
      ...umbrellas,
      {
        id: Date.now(),
        title: "Novo Guardachuva",
        goals: [],
        children: [],
        parentId: parentId,
        isMinimized: false,
      },
    ]);
  };

  const updateUmbrellaTitle = (id, newTitle) => {
    setUmbrellas(
      umbrellas.map((umbrella) =>
        umbrella.id === id ? { ...umbrella, title: newTitle } : umbrella
      )
    );
  };

  const addGoal = (umbrellaId) => {
    setUmbrellas(
      umbrellas.map((umbrella) =>
        umbrella.id === umbrellaId
          ? {
              ...umbrella,
              goals: [...umbrella.goals, { id: Date.now(), text: "Nova Meta" }],
            }
          : umbrella
      )
    );
  };

  const updateGoalText = (umbrellaId, goalId, newText) => {
    setUmbrellas(
      umbrellas.map((umbrella) =>
        umbrella.id === umbrellaId
          ? {
              ...umbrella,
              goals: umbrella.goals.map((goal) =>
                goal.id === goalId ? { ...goal, text: newText } : goal
              ),
            }
          : umbrella
      )
    );
  };

  const toggleUmbrellaVisibility = (id) => {
    setUmbrellas(
      umbrellas.map((umbrella) =>
        umbrella.id === id
          ? { ...umbrella, isMinimized: !umbrella.isMinimized }
          : umbrella
      )
    );
  };

  const getChildren = (parentId) => {
    return umbrellas.filter((umbrella) => umbrella.parentId === parentId);
  };

  return (
    <div>
      <button onClick={() => addUmbrella()}>Adicionar Guardachuva</button>
      <div className="umbrella-container">
        {umbrellas
          .filter((umbrella) => umbrella.parentId === null)
          .map((umbrella) => (
            <UmbrellaContainer
              key={umbrella.id}
              umbrella={umbrella}
              onUpdateTitle={updateUmbrellaTitle}
              onAddGoal={addGoal}
              onUpdateGoal={updateGoalText}
              onToggleVisibility={toggleUmbrellaVisibility}
              onAddSubUmbrella={addUmbrella}
              getChildren={getChildren}
            />
          ))}
      </div>
    </div>
  );
}

export default AppContainer;
