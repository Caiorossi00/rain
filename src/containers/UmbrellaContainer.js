import React from "react";
import Umbrella from "../components/Umbrella";
import Goal from "../components/Goal";

function UmbrellaContainer({
  umbrella,
  onUpdateTitle,
  onAddGoal,
  onUpdateGoal,
  onToggleVisibility,
  onAddSubUmbrella,
  getChildren,
}) {
  const children = getChildren(umbrella.id);

  return (
    <div className="umbrella">
      <div className="umbrella-header">
        <Umbrella
          title={umbrella.title}
          onUpdateTitle={(newTitle) => onUpdateTitle(umbrella.id, newTitle)}
        />
        <button onClick={() => onToggleVisibility(umbrella.id)}>
          {umbrella.isMinimized ? "+" : "-"}
        </button>
        <button onClick={() => onAddSubUmbrella(umbrella.id)}>
          Adicionar Sub-Guardachuva
        </button>
      </div>

      {!umbrella.isMinimized && (
        <>
          <button onClick={() => onAddGoal(umbrella.id)}>Adicionar Meta</button>
          <div className="goals">
            {umbrella.goals.map((goal) => (
              <Goal
                key={goal.id}
                text={goal.text}
                onUpdateText={(newText) =>
                  onUpdateGoal(umbrella.id, goal.id, newText)
                }
              />
            ))}
          </div>
          {children.length > 0 && (
            <div className="sub-umbrella-container">
              {children.map((child) => (
                <UmbrellaContainer
                  key={child.id}
                  umbrella={child}
                  onUpdateTitle={onUpdateTitle}
                  onAddGoal={onAddGoal}
                  onUpdateGoal={onUpdateGoal}
                  onToggleVisibility={onToggleVisibility}
                  onAddSubUmbrella={onAddSubUmbrella}
                  getChildren={getChildren}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default UmbrellaContainer;
