import { shallow } from 'enzyme';
import Tagline from './index';
import { render } from '@testing-library/react';

describe('Tagline', () => {
  describe('Check the text content', () => {
    it('returns the text', () => {
      const component = render(<Tagline />);

      expect(component.getByTestId('tagline').innerHTML).toBe(
        "Let's plan your <strong>saving goal</strong>."
      );
    });
  });
});
