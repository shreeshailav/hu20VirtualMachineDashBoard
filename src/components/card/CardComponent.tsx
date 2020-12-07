import React from "react";
import "./cardCoponent.css";
import { VirtualMachineData } from "./../../store/virtualMachin/types";
import Separator from "./../separator/Separator";
type Props = {
  virtualMachineDetails: VirtualMachineData;
};
const CardCoponent = ({ virtualMachineDetails }: Props) => {
  const getTotalPrice = () => {
    if (virtualMachineDetails) {
      const {
        vitualMachines,
        instanceType,
        storageCapacity,
      } = virtualMachineDetails;
      const extPrice = virtualMachineDetails.storageCapacity?.storageCapacityOption?.filter(
        (item) => item.storageType === "EXT"
      )[0].price;
      const total =
        (vitualMachines?.basicPrice ? vitualMachines?.basicPrice : 0) +
        (instanceType?.cpuPrice ? instanceType?.cpuPrice : 0) +
        (storageCapacity?.bandwidthPrice
          ? storageCapacity?.bandwidthPrice
          : 0) +
        (extPrice ? extPrice : 0);
        return total;
    }
    return 0;
  };
  const totalPice = getTotalPrice();
  const storageCapacityPrice = virtualMachineDetails.storageCapacity?.storageCapacityOption?.filter(
    (item) => item.storageType === "EXT"
  )[0].price
  return (
    <div className="Card-style">
      <div className="cost-panel-title">
        <label>Cost Estimation</label>
      </div>
      <div className="cost-panel">
        <div className="cost-panel-row">
          <label>{virtualMachineDetails.vitualMachines?.vmName}</label>
          {virtualMachineDetails.vitualMachines?.basicPrice && <label>{`$${virtualMachineDetails.vitualMachines?.basicPrice}`}</label>}
        </div>
        <div className="cost-panel-row">
          <label>{virtualMachineDetails.hostType?.hostName}</label>
          {virtualMachineDetails.hostType?.priceOnHostType && <label>{`$${virtualMachineDetails.hostType?.priceOnHostType}`}</label>}
        </div>
        {virtualMachineDetails.instanceType &&
          virtualMachineDetails.instanceType.memoryPrice > 0 && (
            <div className="cost-panel-row">
              <label>
                {
                  virtualMachineDetails.instanceType
                    ?.instanceTypeSelectedMemeory
                }
              </label>
              <label>{`$${virtualMachineDetails.instanceType?.memoryPrice}`}</label>
            </div>
          )}
        {virtualMachineDetails.instanceType &&
          virtualMachineDetails.instanceType.cpuPrice > 0 && (
            <div className="cost-panel-row">
              <label>
                {virtualMachineDetails.instanceType?.instanceTypeSelectedCpu}
              </label>
              <label>{`$${virtualMachineDetails.instanceType?.cpuPrice}`}</label>
            </div>
          )}
        {storageCapacityPrice &&
          storageCapacityPrice > 0 && (
            <div className="cost-panel-row">
              <label>{"EXT Storage"}</label>
              <label>{`$${
                storageCapacityPrice
              }`}</label>
            </div>
          )}
        {virtualMachineDetails.storageCapacity &&
          virtualMachineDetails.storageCapacity?.bandwidthPrice > 0 && (
            <div className="cost-panel-row">
              <label>{"Bandwidth"}</label>
              <label>{`$${virtualMachineDetails.storageCapacity?.bandwidthPrice}`}</label>
            </div>
          )}
      </div>
      <Separator />
      <div className="cost-panel">
      {  totalPice>0 &&  <div className="cost-panel-row">
        <label>{"Total Price"}</label>
          <label>
            {"$"}
            {getTotalPrice()}
            {"/mo"}
          </label>
        </div>}
      </div>
    </div>
  );
};

export default CardCoponent;
