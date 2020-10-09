import React from 'react';

import { TagGroup, TableListView, GenericGroup } from '@manageiq/react-ui-components/dist/textual_summary';
import { Toolbar } from '@manageiq/react-ui-components/dist/toolbar';

import AggregateStatusCard from '../components/aggregate_status_card';
import { BreadcrumbsBar } from '../components/breadcrumbs';
import CatalogForm from '../components/catalog-form/catalog-form';
import CloudNetworkForm from '../components/cloud-network-form/cloud-network-form';
import CloudTenantForm from '../components/cloud-tenant-form/cloud-tenant-form';
import ProviderForm from '../components/provider-form';
import CopyCatalogForm from '../components/copy-catalog-form/copy-catalog-form';
import CopyDashboardForm from '../components/copy-dashboard-form/copy-dashboard-form';
import FlavorForm from '../components/flavor-form/flavor-form';
import FirmwareRegistryForm from '../components/firmware-registry/firmware-registry-form';
import FormButtonsRedux from '../forms/form-buttons-redux';
import GenericGroupWrapper from '../react/generic_group_wrapper';
import GtlView from  '../components/gtl-view';
import { TreeViewRedux } from '../components/tree-view';
import FonticonPicker from '../components/fonticon-picker';
import ImportDatastoreViaGit from '../components/automate-import-export-form/import-datastore-via-git';
import MiqAboutModal from '../components/miq-about-modal';
import MiqToolbar from '../components/miq-toolbar';
import { MainMenu, Navbar } from '../menu';
import NotificationDrawer from '../components/notification-drawer/notification-drawer';
import OptimizationList from '../optimization/optimization_list';
import OpsTenantForm from '../components/ops-tenant-form/ops-tenant-form';
import OrcherstrationTemplateForm from '../components/orchestration-template/orcherstration-template-form';
import PxeServersForm from '../components/pxe-servers-form/pxe-server-form';
import { Quadicon } from '@manageiq/react-ui-components/dist/quadicon';
import RegionForm from '../components/region-form';
import RemoveCatalogItemModal from '../components/remove-catalog-item-modal';
import RemoveGenericItemModal from '../components/remove-generic-item-modal';
import ReportDataTable from '../components/report-data-table';
import ServiceDialogFromForm from '../components/service-dialog-from-form/service-dialog-from';
import ServiceForm from '../components/service-form';
import SetOwnershipForm from '../components/set-ownership-form';
import TableListViewWrapper from '../react/table_list_view_wrapper';
import TaggingWrapperConnected from '../components/taggingWrapper';
import { TagView } from '../tagging';
import ToastList from '../components/toast-list/toast-list';
import TextualSummaryWrapper from '../react/textual_summary_wrapper';
import VmServerRelationshipForm from '../components/vm-server-relationship-form';
import VmSnapshotForm from '../components/vm-snapshot-form/vm-snapshot-form';
import WorkersForm from '../components/workers-form/workers-form';

/**
* Add component definitions to this file.
* example of component definition:
* ManageIQ.component.addReact('ComponentName', props => <ComponentName {...props} />);
*/

ManageIQ.component.addReact('AggregateStatusCard', AggregateStatusCard);
ManageIQ.component.addReact('BreadcrumbsBar', BreadcrumbsBar);
ManageIQ.component.addReact('CatalogForm', CatalogForm);
ManageIQ.component.addReact('CloudNetworkForm', CloudNetworkForm);
ManageIQ.component.addReact('CloudTenantForm', CloudTenantForm);
ManageIQ.component.addReact('ProviderForm', ProviderForm);
ManageIQ.component.addReact('CopyCatalogForm', CopyCatalogForm);
ManageIQ.component.addReact('CopyDashboardForm', CopyDashboardForm);
ManageIQ.component.addReact('FirmwareRegistryForm', FirmwareRegistryForm);
ManageIQ.component.addReact('FlavorForm', FlavorForm);
ManageIQ.component.addReact('FormButtonsRedux', FormButtonsRedux);
ManageIQ.component.addReact('GenericGroup', GenericGroup);
ManageIQ.component.addReact('GenericGroupWrapper', GenericGroupWrapper);
ManageIQ.component.addReact('GtlView', GtlView);
ManageIQ.component.addReact('TreeViewRedux', TreeViewRedux);
ManageIQ.component.addReact('FonticonPicker', FonticonPicker);
ManageIQ.component.addReact('ImportDatastoreViaGit', ImportDatastoreViaGit);
ManageIQ.component.addReact('MiqAboutModal', MiqAboutModal);
ManageIQ.component.addReact('MiqToolbar', MiqToolbar);
ManageIQ.component.addReact('menu.MainMenu', MainMenu);
ManageIQ.component.addReact('menu.Navbar', Navbar);
ManageIQ.component.addReact('NotificationDrawer', NotificationDrawer);
ManageIQ.component.addReact('OpsTenantForm', OpsTenantForm);
ManageIQ.component.addReact('OptimizationList', OptimizationList);
ManageIQ.component.addReact('OrcherstrationTemplateForm', OrcherstrationTemplateForm);
ManageIQ.component.addReact('PxeServersForm', PxeServersForm);
ManageIQ.component.addReact('Quadicon', Quadicon);
ManageIQ.component.addReact('RegionForm', RegionForm);
ManageIQ.component.addReact('RemoveCatalogItemModal', RemoveCatalogItemModal);
ManageIQ.component.addReact('RemoveGenericItemModal', RemoveGenericItemModal);
ManageIQ.component.addReact('ReportDataTable', ReportDataTable);
ManageIQ.component.addReact('ServiceDialogFromForm', ServiceDialogFromForm);
ManageIQ.component.addReact('ServiceForm', ServiceForm);
ManageIQ.component.addReact('SetOwnershipForm', SetOwnershipForm);
ManageIQ.component.addReact('TableListView', TableListView);
ManageIQ.component.addReact('TableListViewWrapper', TableListViewWrapper);
ManageIQ.component.addReact('TagGroup', props => <TagGroup {...props} />);
ManageIQ.component.addReact('TagView', TagView);
ManageIQ.component.addReact('TaggingWrapperConnected', TaggingWrapperConnected);
ManageIQ.component.addReact('TextualSummaryWrapper', TextualSummaryWrapper);
ManageIQ.component.addReact('ToastList', ToastList);
ManageIQ.component.addReact('Toolbar', Toolbar);
ManageIQ.component.addReact('VmServerRelationshipForm', VmServerRelationshipForm);
ManageIQ.component.addReact('VmSnapshotForm', VmSnapshotForm);
ManageIQ.component.addReact('WorkersForm', WorkersForm);
