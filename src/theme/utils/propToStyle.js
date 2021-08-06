import breakpointsMedia from './breakpointsMedia';

export default function propToStyle(propName) {
  return (props) => {
    const propValue = props[propName];
    if (typeof propValue === 'string' || propValue === 'number') {
      return { [propName]: propValue };
    }

    if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },

        md: {
          [propName]: propValue.md,
        },
      });
    }

    return undefined;
  };
}
