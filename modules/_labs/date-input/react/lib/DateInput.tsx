import * as React from 'react';
import styled from '@emotion/styled';

export interface DateInputProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = styled('div')<DateInputProps>({});

export default class DateInput extends React.Component<DateInputProps, {}> {
  public render() {
    const {...elemProps} = this.props;

    return <Container {...elemProps}>DateInput</Container>;
  }
}
