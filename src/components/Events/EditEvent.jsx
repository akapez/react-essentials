import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';

import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, updateEvent, queryClient } from '../../utils/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;
      await queryClient.cancelQueries({ queryKey: ['events', params.id] });
      const prevEvent = queryClient.getQueriesData(['events', params.id]);
      queryClient.setQueriesData(['events', params.id], newEvent);

      return { prevEvent };
    },
    onError: (error, data, context) => {
      queryClient.setQueriesData(['events', params.id], context.prevEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['events', params.id]);
    }
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = <div className='center'><LoadingIndicator /></div>;
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock title="An error occurred" message={error.info?.message || "Failed to fetch event"} />
        <div className='form-actions'>
          <Link to='../' className='button'>
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = <EventForm inputData={data} onSubmit={handleSubmit}>
      <Link to="../" className="button-text">
        Cancel
      </Link>
      <button type="submit" className="button">
        Update
      </button>
    </EventForm>;
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}
