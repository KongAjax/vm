import {Scroll, Pulldown2refresh} from './components/scroll';
import List from './components/list';
import Page from './components/page';
import Topbar from './components/topbar';
import Button from './components/button';
import Alert from './components/alert';
import Toast from './components/toast';
import ActionSheet from './components/actionsheet';
import Dropdown from './components/dropdown';
import Draggable from './directives/draggable';
import Popover from './components/popover';
import Search from './components/search';
import Searchbar from './components/searchbar';
import Uploader from './components/uploader';
import {Grid, GridItem} from './components/grid';
import {Radios, Checkboxes, TextInput, Select, Images, Counter, Switch, Textarea} from './components/form';
import {Single, Multiple, Link, LinkMultiple} from './components/filter';
import Autosize from './directives/autosize';
import Mask from './components/mask';
import Overlay from './components/overlay';
import Iosselect from './components/iosselect';
import Datepicker from './components/datepicker';
import {Slider, SliderItem} from './components/slider';
import Forward from './components/forward';
import Tabbar from './components/tabbar';
import {Box, Row} from './components/layout';
import Badge from './directives/badge';
import Segment from './components/segment';
import BadgeComponent from './components/badge';
import Helper from './helper';
import Lazyload from './directives/lazyload';

import Vue from 'vue';

var Components = [
    Segment,
    Box,
    Row,
    Badge,
    BadgeComponent,
    Forward,
    Tabbar,
    Scroll,
    Pulldown2refresh,
    List,
    Page,
    Topbar,
    Button,
    Alert,
    Toast,
    ActionSheet,
    Dropdown,
    Draggable,
    Popover,
    Searchbar,
    Search,
    Uploader,
    GridItem,
    Grid,
    Radios,
    Checkboxes,
    TextInput,
    Textarea,
    Select,
    Images,
    Switch,
    Counter,
    Autosize,
    Mask,
    Overlay,
    Iosselect,
    Datepicker,
    Slider,
    SliderItem,
    Lazyload
];

function install(Vue){
    for(let Component of Components){
        Vue.use(Component);
    }
}

export {
    Box,
    Segment,
    Row,
    Forward,
    Badge,
    Search,
    Searchbar,
    Searchbar as SearchBar,
    Tabbar as TabBar,
    Tabbar,
    Scroll,
    Pulldown2refresh,
    Page,
    Topbar,
    List,
    Alert,
    Button,
    Toast,
    ActionSheet,
    Dropdown,
    Draggable,
    Popover,
    Uploader,
    Grid,
    GridItem,
    //Box as FormBox,
    Radios,
    Checkboxes,
    TextInput,
    TextInput as Textinput,
    Textarea,
    Select,
    Switch,
    Images,
    Counter,
    Single as SingleFilter,
    Multiple as MultipleFilter,
    Link as LinkFilter,
    LinkMultiple as LinkMultipleFilter,
    Autosize,
    Mask,
    Overlay,
    Helper,
    Iosselect,
    Datepicker,
    Slider,
    SliderItem,
    Lazyload
};

export default {install, Helper};