import PropTypes from 'prop-types';
import { RxCross2 } from 'react-icons/rx';

import { Li, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Li key={id}>
      <p>
        {name}: {number}
      </p>
      <Button onClick={() => onDeleteContact(id)}>
        <RxCross2 size="20px" />
      </Button>
    </Li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
