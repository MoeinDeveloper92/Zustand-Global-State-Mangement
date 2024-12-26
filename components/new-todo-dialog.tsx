'use client';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useTaskStore } from '@/store/store';
export default function NewTodoDialog() {
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const { title, description } = Object.fromEntries(formData);
    if (typeof title !== 'string' || typeof description !== 'string') return;
    if (title.trim().length === 0) {
      alert('You shoudl add a title for your TODO');
      return;
    }
    addTask(title, description);
  };

  return (
    <div className="mt-7">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={'secondary'} size={'sm'}>
            + Add New Todo
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Todo</DialogTitle>
            <DialogDescription>
              What do you want to get done today???
            </DialogDescription>
          </DialogHeader>
          <form
            id="todo-form"
            className="grid gap-4 py-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="title"
                name="title"
                placeholder="Todo title..."
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Textarea
                id="description"
                name="description"
                placeholder="Description..."
                className="col-span-4"
              />
            </div>
          </form>
          <DialogFooter>
            <DialogTrigger asChild>
              <Button type="submit" size="sm" form="todo-form">
                Add Todo
              </Button>
            </DialogTrigger>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
