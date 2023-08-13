The page should begin with a clickable circle, "strategist", and the user is invited to click on it because of touch interactions or hover.
Hovering over strategist brings out the sub level components beneath strategist.
Clicking on strategist locks the sub level components in place.
Clicking on a sub level component moves it into the centre to cover strategist, which disappears the other sub level components also disappear behind strategist and the secondary sub level components are brought out.
Clicking one of the secondary sub level components moves it to the centre;
the other secondary sub level components move behind the clicked component;
the tertiary level components are brought out.
Clicking on the tertiary level components gives a fuller description in a modal box.
Clicking on the central secondary sub level component returns all the components at that level to the previous position.

Each component apart from the central strategist component has 3 states:
a dormant state which is central and at a lower Z index than the top level component.
An outer state where the component is in its outer position.
The 3rd state depends on the components position in the hierarchy.:
At the lowest level the component brings out a modal on hover;
and locks the modal imposition on click.
At the middle level the component is ready to either;
return to its previous position upon being clicked;
or return to a hidden central position if a different component is clicked.

Only visible buttons are clickable or can be hovered,
hidden buttons cannot be clicked or hovered.

All components should have the same transition between positions:
from hidden in the centre, which is a transparent state,
to visible in the outer position.


The position, transparency, and Z index should be controlled by both:
a click on the component,
a click on a connected component
a completion of a transition,
the completion of a transition of a different component.