import React from 'react'
import { Tags, Text, Context, Flags } from './components';

function Quote({children}) {
    return children;
}

Quote.Text = Text;
Quote.Context = Context;
Quote.Tags = Tags;
Quote.Flags = Flags;

export default Quote
