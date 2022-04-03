import { render, screen } from '@testing-library/react';
import { Pokemon } from './Pokemon';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('Pokemon component', () => {
    it('has correct Next.js theming section link', () => {
        render(<Pokemon pokemon={undefined} />);
        expect(screen.getByText('this guide')).toHaveAttribute(
            'href',
            'https://mantine.dev/theming/next/'
        );
    });
});
