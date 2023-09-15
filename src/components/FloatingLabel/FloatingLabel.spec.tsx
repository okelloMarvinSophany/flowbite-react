<<<<<<< HEAD
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FloatingLabel } from '~/src/components/FloatingLabel/FloatingLabel';

describe('Components / Floating Label', () => {
  describe('Floating Label properties', () => {
    it('should have `role="textbox"` by default', () => {
      const textInput = render(<FloatingLabel variant={'filled'} label={'Label'} />).getByRole('textbox');
      expect(textInput).toBeInTheDocument();
    });

    it('should have a label', () => {
      const input = render(<FloatingLabel variant={'filled'} label={'Label'} />).getByLabelText('Label');
      expect(input).toBeInTheDocument();
    });
    it('should update the input value correctly', () => {
      const input: HTMLInputElement | null = render(
        <FloatingLabel variant={'filled'} label={'Label'} defaultValue={'my name is'} />,
      ).getByTestId('floating-label-1') as HTMLInputElement;
      expect(input.value).toBe('my name is');
    });

    it('should be disabled', () => {
      const input = render(<FloatingLabel variant={'filled'} label={'Label'} disabled={true} />).getByTestId(
        'floating-label-1',
      );
      expect(input).toBeDisabled();
    });
  });
});
=======
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FloatingLabel } from "~/src/components/FloatingLabel/FloatingLabel";

describe('Components / Floating Label', () => {
  describe('Floating Label properties', () => {
    it('should have `role="textbox"` by default', () => {
      const textInput = render(<FloatingLabel buttonStyle={'filled'} label={'Label'} />).getByRole('textbox');
      expect(textInput).toBeInTheDocument();
    });

    it('should have a label', () => {
      const input = render(<FloatingLabel buttonStyle={'filled'} label={'Label'} />).getByLabelText('Label');
      expect(input).toBeInTheDocument();
    });
  });

  it('should update the input value correctly', () => {
    const input: HTMLInputElement | null = render(
      <FloatingLabel buttonStyle={'filled'} label={'Label'} defaultValue={'my name is'} />,
    ).getByTestId('floating-label') as HTMLInputElement;
    expect(input.value).toBe('my name is');
  });

  it('should be disabled', () => {
    const input = render(<FloatingLabel buttonStyle={'filled'} label={'Label'} disabled={true} />).getByTestId(
      'floating-label',
    );
    expect(input).toBeDisabled();
  });
});




>>>>>>> 49d5804 (feat: wrote tests for the the Floating label component)
