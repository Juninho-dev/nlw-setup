interface Habit {
  completed: number;
}

export function Habit(props: Habit) {
  return (
    <p className="bg-zinc-900 w-10 h-10 text-white rounded m-2 text-center flex items-center justify-center">
      {props.completed}
    </p>
  );
}
