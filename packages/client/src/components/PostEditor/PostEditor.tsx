import React from 'react';
import { useForm } from 'react-hook-form';

import { TextField } from '../UI/TextField';
import { Button } from '../UI/Button';
import { Label } from '../UI/Label';
import { MarkdownTextField } from '../MarkdownTextField/MarkdownTextField';

export const PostEditor = ({ mutate }) => {
  const { register, handleSubmit, setValue, errors } = useForm();

  const onSubmit = (data) => {
    mutate(data);
  };

  React.useEffect(() => {
    register('body', { required: true });
  }, [register]);

  return (
    <form className="bg-white p-4 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Label
        title="Title"
        description="Be specific and imagine you’re asking a question to another person"
        error={errors.title && 'Title is missing'}
      >
        <TextField
          name="title"
          ref={register({ required: true })}
          error={errors.title}
        />
      </Label>
      <Label
        title="Body"
        description="Include all the information someone would need to answer your question"
        error={errors.body && 'Body is missing'}
      >
        <MarkdownTextField
          error={errors.body}
          onChange={(value) => {
            setValue('body', value);
          }}
        />
      </Label>
      <Button type="submit">Ask your question</Button>
    </form>
  );
};